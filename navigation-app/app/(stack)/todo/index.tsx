import React, { useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoIndex() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      title: "Aprender React Native",
      completed: false,
    },
    {
      id: "2",
      title: "Hacer ejercicio",
      completed: true,
    },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // TODO 1: CREATE + UPDATE
  const addTask = (): void => {
    // validar texto vacío
    // si editingId existe -> actualizar con map
    // si no -> crear nuevo objeto y agregar al array
    // limpiar input
  };

  // TODO 2: DELETE
  const deleteTask = (id: string): void => {
    // usar filter
  };

  // TODO 3: TOGGLE COMPLETE
  const toggleComplete = (id: string): void => {
    // usar map
  };

  // TODO 4: START EDIT
  const startEdit = (item: Todo): void => {
    // cargar texto en input
    // guardar id
  };

  const renderItem = ({ item }: ListRenderItemInfo<Todo>) => (
    <View
      style={{
        backgroundColor: "#f2f2f2",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <TouchableOpacity onPress={() => toggleComplete(item.id)}>
        <Text
          style={{
            fontSize: 16,
            textDecorationLine: item.completed ? "line-through" : "none",
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
        <Pressable
          onPress={() => startEdit(item)}
          style={{
            backgroundColor: "#2196F3",
            padding: 8,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white" }}>Editar</Text>
        </Pressable>

        <Pressable
          onPress={() => deleteTask(item.id)}
          style={{
            backgroundColor: "#f44336",
            padding: 8,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white" }}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Todo List CRUD
      </Text>

      <TextInput
        placeholder="Nueva tarea..."
        value={task}
        onChangeText={setTask}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 8,
        }}
      />

      <Pressable
        onPress={addTask}
        style={{
          backgroundColor: "#4CAF50",
          padding: 12,
          borderRadius: 10,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {editingId ? "Actualizar" : "Agregar"}
        </Text>
      </Pressable>

      <FlatList<Todo>
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
