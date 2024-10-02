import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notes from '../src/screens/Notes';
import {AddNoteNavigator, NotesNavigator} from './StackNavigator';

export default function Routing() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={NotesNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Notes',
        }}
      />
      <Tab.Screen
        name="AddNotes"
        component={AddNoteNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Add Note',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
