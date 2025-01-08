import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'James Cyprian', phoneNumber: '234127812111' },
  ]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactPhone, setNewContactPhone] = useState('');

  
  const createContact = () => {
    if (!newContactName || !newContactPhone) {
      alert('Name and contact are both required!');
      return;
    }
    const newContact = {
      id: Math.random().toString(),
      name: newContactName,
      phoneNumber: newContactPhone,
    };
    setContacts([...contacts, newContact]);
    setNewContactName('');
    setNewContactPhone('');
  };


  const deleteById = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>

      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text>{item.name}</Text>
            <Text>{item.phoneNumber}</Text>
            <Button title="Delete" onPress={() => deleteById(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <TextInput
        placeholder="Name"
        value={newContactName}
        onChangeText={setNewContactName}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={newContactPhone}
        onChangeText={setNewContactPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <Button title="Add" onPress={createContact} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contactItem: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
});


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
