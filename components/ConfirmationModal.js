import React from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  width: 80%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
`;

const ConfirmationModal = ({ visible, message, onConfirm, onClose, isError }) => {
    return (
        <Modal transparent visible={visible} animationType="slide">
            <ModalContainer>
                <ModalContent>
                    <Icon
                        name={isError ? "error" : "warning"}
                        size={40}
                        color={isError ? "red" : "orange"}
                        style={{ marginBottom: 10 }}
                    />
                    <Text style={styles.errorText}>{message}</Text>
                    <View style={styles.buttonContainer}>
                        {isError ? (
                            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                <Text style={styles.buttonText}>닫기</Text>
                            </TouchableOpacity>
                        ) : (
                            <>
                                <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                                    <Text style={styles.buttonText}>취소</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onConfirm} style={styles.confirmButton}>
                                    <Text style={styles.buttonText}>확인</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
};

const styles = StyleSheet.create({
    errorText: {
        marginBottom: 20,
        textAlign: 'center',
        margin: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        marginRight: 10,
    },
    confirmButton: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        marginRight: 10,
    },
    closeButton: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
    },
    buttonText: {
        color: 'black', // 버튼 텍스트 색상
        fontSize: 16,
    },
});

export default ConfirmationModal;
