import React, { useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const FilePickerComponent = () => {
  const [pickedFile, setPickedFile] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'image/*',
      });
      console.log(result.type);
      if (result.type === 'success') {
        setPickedFile(result);
      }
    } catch (err) {
      console.log('Error picking document:', err);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title='Pick a File' onPress={pickDocument} />
      {pickedFile && (
        <View style={{ marginTop: 20 }}>
          <Text>Selected File:</Text>
          <Text>Name: {pickedFile.name}</Text>
          <Text>Size: {pickedFile.size}</Text>
          <Text>Type: {pickedFile.type}</Text>
        </View>
      )}
    </View>
  );
};

export default FilePickerComponent;
