import { View, Text, Modal, KeyboardAvoidingView, TouchableOpacity, Platform, TextInput } from 'react-native'
import React from 'react'
import { CloseIcon } from '../screens/Icons'
import styles from '../styles/homeStyles'

interface NewTaskProps {
    modalVisible: boolean;
    editId: string | null;
    resetForm: () => void;
    title: string;
    content: string;
    colors: string[];
    setSelectedColor: (color: string) => void;
    addNote: () => void;
    setTitle: (text: string) => void;
    setContent: (text: string) => void;
    selectedColor: string;
}

const NewTask: React.FC<NewTaskProps> = ({
    modalVisible,
    editId,
    resetForm,
    title,
    content,
    colors,
    setSelectedColor,
    addNote,
    setTitle,
    setContent,
    selectedColor
}) => {
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modalBackground}>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[styles.modalContainer, { backgroundColor: selectedColor }]}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>{editId ? 'Edit Note' : 'Add New Note'}</Text>
                        <TouchableOpacity onPress={resetForm}>
                            <CloseIcon />
                        </TouchableOpacity>
                    </View>
                    <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
                    <TextInput placeholder="Content" value={content} onChangeText={setContent} style={styles.input} multiline />
                    <View style={styles.colorPickerContainer}>
                        {colors.map(color => (
                            <TouchableOpacity
                                key={color}
                                onPress={() => setSelectedColor(color)}
                                style={[styles.colorCircle, { backgroundColor: color, borderColor: selectedColor === color ? 'black' : 'white' }]}
                            />
                        ))}
                    </View>
                    <TouchableOpacity onPress={addNote} style={styles.addButton}>
                        <Text style={styles.addText}>{editId ? 'Update Note' : 'Add Note'}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    )
}

export default NewTask