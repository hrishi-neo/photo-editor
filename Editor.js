import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import PhotoEditor from '@baronha/react-native-photo-editor';
const Editor = () => {
  const remoteURL =
    'https://images.unsplash.com/photo-1634915728822-5ad85582837a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80';
  const stickers = [
    'https://cdn-icons-png.flaticon.com/512/5272/5272912.png',
    'https://cdn-icons-png.flaticon.com/512/5272/5272913.png',
    'https://cdn-icons-png.flaticon.com/512/5272/5272916.png',
  ];

  const edit = async () => {
    const result = await PhotoEditor.open({
      path: remoteURL,
    
    });
    console.log(result);
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Button title={'EDIT'} onPress={() => edit()} />
    </View>
  );
};

export default Editor;
