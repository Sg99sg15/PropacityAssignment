import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, Modal, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddIcon, CloseIcon, DeleteIcon, EditIcon } from './Icons';
import styles from '../styles/homeStyles';
import NewTask from '../components/NewTask';
import TaskCard from '../components/TaskCard';

interface Note {
    id: string;
    title: string;
    content: string;
    color: string;
}

const colors = ['#FFFFFF', '#FFEB3B', '#FFCDD2', '#C8E6C9', '#BBDEFB', '#D1C4E9'];

const Home = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [searchText, setSearchText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);
    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        const savedNotes = await AsyncStorage.getItem('notes');
        if (savedNotes) setNotes(JSON.parse(savedNotes));
    };

    const saveNotes = async (updatedNotes: Note[]) => {
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    const addNote = () => {
        if (!title.trim() || !content.trim()) return;

        if (editId) {
            const updatedNotes = notes.map(note =>
                note.id === editId ? { ...note, title, content, color: selectedColor } : note
            );
            saveNotes(updatedNotes);
        } else {
            const newNote: Note = { id: Date.now().toString(), title, content, color: selectedColor };
            saveNotes([newNote, ...notes]);
        }
        resetForm();
    };

    const deleteNote = (id: string) => {
        Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Delete', onPress: () => saveNotes(notes.filter(note => note.id !== id)) }
        ]);
    };

    const editNote = (item: Note) => {
        setEditId(item.id);
        setTitle(item.title);
        setContent(item.content);
        setSelectedColor(item.color);
        setModalVisible(true);
    };

    const resetForm = () => {
        setTitle('');
        setContent('');
        setSelectedColor(colors[0]);
        setEditId(null);
        setModalVisible(false);
    };

    const filteredNotes = notes.filter(note => note.title.includes(searchText) || note.content.includes(searchText));

    return (
        <>
            <View style={styles.mainContainer}>
                <TextInput placeholder="Search notes..." value={searchText} onChangeText={setSearchText} style={styles.search} />
                {searchText && <TouchableOpacity style={{ padding: 10 }} onPress={() => setSearchText('')}>
                    <CloseIcon />
                </TouchableOpacity>}
            </View>
            <TouchableOpacity style={styles.addButtonContainer} onPress={() => setModalVisible(true)}>
                <AddIcon color='white' />
                <Text style={styles.addButtonText}>{editId ? 'EDIT NOTE' : 'ADD NEW NOTE'}</Text>
            </TouchableOpacity>

            <FlatList
                ListEmptyComponent={() => {
                    return (
                        <>
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>No Task Available</Text>
                            </View>
                        </>
                    )
                }}
                data={filteredNotes}
                contentContainerStyle={styles.flatListContainer}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <TaskCard item={item} editNote={editNote} deleteNote={deleteNote} />
                    )
                }
                }
            />
            {modalVisible && <NewTask
                modalVisible={modalVisible}
                editId={editId}
                resetForm={resetForm}
                title={title}
                content={content}
                colors={colors}
                setSelectedColor={setSelectedColor}
                addNote={addNote}
                setTitle={setTitle}
                setContent={setContent}
                selectedColor={selectedColor}
            />}

        </>
    );
};
export default Home;
