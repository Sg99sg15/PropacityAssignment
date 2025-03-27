import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles/homeStyles';
import { DeleteIcon, EditIcon } from '../screens/Icons';

interface Note {
    id: string;
    title: string;
    content: string;
    color: string;
}

interface TaskCardProps {
    item: Note;
    editNote: (note: Note) => void;
    deleteNote: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ item, editNote, deleteNote }) => {
    return (
        <View style={[styles.noteCard, { backgroundColor: item.color }]}>
            <View style={styles.noteHeader}>
                <Text style={styles.noteTitle}>{item.title}</Text>
                <View style={styles.noteActions}>
                    <TouchableOpacity style={styles.iconButton} onPress={() => editNote(item)}>
                        <EditIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} onPress={() => deleteNote(item.id)}>
                        <DeleteIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.noteContent}>{item.content}</Text>
        </View>
    );
};

export default TaskCard;
