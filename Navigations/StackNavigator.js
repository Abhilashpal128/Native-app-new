import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Notes from '../src/screens/Notes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddNote from '../src/screens/AddNote';

export function NotesNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={Notes} />
    </Stack.Navigator>
  );
}

export function AddNoteNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={AddNote} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
