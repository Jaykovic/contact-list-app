//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'; 

export default function App() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'James Cyprian', phoneNumber: '234127812111' },
    { id: '2', name: 'Cole Palmer', phoneNumber: '234832828422' },
    { id: '3', name: 'Eden Hazard', phoneNumber: '234094282322' },
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

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>Contacts</Text>

  //     <FlatList
  //       data={contacts}
  //       renderItem={({ item }) => (
  //         <View style={styles.contactItem}>
  //           <Text>{item.name}</Text>
  //           <Text>{item.phoneNumber}</Text>
  //           <Button title="Delete" onPress={() => deleteById(item.id)} />
  //         </View>
  //       )}
  //       keyExtractor={item => item.id}
  //     />

  //     <TextInput
  //       placeholder="Name"
  //       value={newContactName}
  //       onChangeText={setNewContactName}
  //       style={styles.input}
  //     />
  //     <TextInput
  //       placeholder="Phone Number"
  //       value={newContactPhone}
  //       onChangeText={setNewContactPhone}
  //       style={styles.input}
  //       keyboardType="phone-pad"
  //     />
  //     <Button title="Add" onPress={createContact} />
  //   </View>
  // );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contacts</Text>

      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Name</Text>
        <Text style={styles.tableHeaderText}>Phone Number</Text>
        <Text style={styles.tableHeaderText}>Actions</Text>
      </View>

      {contacts.map((contact) => (
        <View key={contact.id} style={styles.tableRow}>
          <Text style={styles.tableCell}>{contact.name}</Text>
          <Text style={styles.tableCell}>{contact.phoneNumber}</Text>
          <TouchableOpacity onPress={() => deleteById(contact.id)} style={styles.deleteButton}>
            {/* <Text style={styles.deleteButtonText}>Delete</Text> */}
            <Ionicons name="trash-bin-outline" size={24} color="red" />
          </TouchableOpacity>
        </View>
      ))}

    <Text style={styles.formHeader}>Contact Form</Text>  
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
      {/* <Button title="Add" onPress={createContact} style={styles.createButton} /> */}
      <TouchableOpacity style={styles.addButton} onPress={createContact}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   contactItem: {
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginVertical: 5,
//   },
// });

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  // deleteButton: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#ff4d4d',
  //   borderRadius: 5,
  //   paddingVertical: 5,
  // },
  // deleteButtonText: {
  //   color: 'white',
  //   fontWeight: 'bold',
  // },
  deleteButton: {
    padding: 10,
  },
  addButton: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 150,
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  formHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 30
  },
});
