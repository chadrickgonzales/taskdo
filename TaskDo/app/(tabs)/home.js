import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useRouter } from "expo-router";
import Sidebar from "./Sidebar"; 
import Topbar from "./Topbar";
import { FontAwesome, Ionicons, } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const tasksList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksList);
    };

    fetchTasks();
  }, []);

  const toggleTask = (taskId) => {
    setActiveTask(activeTask === taskId ? null : taskId);
  };

  return (
    <View style={styles.container}>
        <Sidebar /> 
        <Topbar/>

        <View style={styles.Topcontainer}>

          <View style={styles.onGoingtaskcontainer}>
            <Text style={styles.title}>Color Palette Selection</Text>
            <Text style={styles.subtitle}>Over9k: Gamers App</Text>

            <TouchableOpacity 
                style={[styles.firstplayButton, { backgroundColor: activeTask === "ongoing-task" ? "#F25042" : "#357ABD" }]} 
                onPress={() => toggleTask("ongoing-task")}
            >
                <Ionicons name={activeTask === "ongoing-task" ? "pause" : "play"} size={40} color="#FFF" />
            </TouchableOpacity>

            <View style={styles.timeContainer}>

              <View style={styles.timeBox}>
                <Text style={styles.timeLabel}>Today</Text>
                <Text style={styles.time}>00:57:56</Text>
              </View>

              <View style={styles.timeBox}>
                <Text style={styles.timeLabel}>Today</Text>
                <Text style={styles.time}>00:57:56</Text>
              </View>

            </View>
        
          </View>

          <View style={styles.taskcontainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Today's tasks <Text style={styles.taskCount}>{tasks.length}</Text></Text>
            <TouchableOpacity>
              <Text style={styles.manageButton}>Manage &gt;</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.taskCard}>
                <TouchableOpacity 
                  style={[styles.playButton, { backgroundColor: activeTask === item.id ? "#F25042" : "#357ABD" }]} 
                  onPress={() => toggleTask(item.id)}
                >
                  <Ionicons name={activeTask === item.id ? "pause" : "play"} size={20} color="#FFF" />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                  <Text style={styles.taskTitle}>{item.name}</Text>
                  <Text style={styles.taskDescription}>{item.description}</Text>
                </View>
                <Ionicons name="star-outline" size={16} color="#AAA" style={styles.starIcon} />
              </View>
            )}
          />
        </View>

        
          <View style={styles.meetingcontainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Today's meetings <Text style={styles.taskCount}>6</Text></Text>
              <TouchableOpacity>
                <Text style={styles.manageButton}>View all &gt;</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.meetingsContainer}>
              <View style={[styles.meetingCard, { backgroundColor: "#400000" }]}> 
                <Text style={styles.meetingTime}>AM 10:00</Text>
                <Text style={styles.meetingTitle}>Present the project and gather feedback</Text>
                <Ionicons name="logo-discord" size={20} color="#FFF" style={styles.meetingIcon} />
              </View>
              <View style={styles.meetingCard}> 
                <Text style={styles.meetingTime}>PM 01:00</Text>
                <Text style={styles.meetingTitle}>Meeting with UX team</Text>
                <Ionicons name="videocam" size={20} color="#AAA" style={styles.meetingIcon} />
              </View>
              <View style={styles.meetingCard}> 
                <Text style={styles.meetingTime}>PM 03:00</Text>
                <Text style={styles.meetingTitle}>Onboarding of the project</Text>
                <Ionicons name="add-circle-outline" size={20} color="#AAA" style={styles.meetingIcon} />
              </View>
              <View style={[styles.meetingCard, styles.scheduleCard]}> 
                <Text style={styles.meetingTitle}>Schedule meeting</Text>
                <Ionicons name="add" size={20} color="#357ABD" style={styles.meetingIcon} />
              </View>
            </View>
          </View>
    
        </View>
      
        <View style={styles.calendar}>
            <View style={styles.calendarHeader}>
                <Text>Projects</Text>
                <TouchableOpacity style={styles.calendarFilter}>
                  <Icon 
                    name="options-outline" 
                    size={24} 
                    color="black" />
                    <Text>Filter</Text>
                </TouchableOpacity>
                <View style={styles.todayFilter}>
                    <TouchableOpacity style={styles.calendarFilter}>
                      <Text>Today</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.calendarFilter}>
                      <Text>Week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.calendarFilter}>
                      <Text>Month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.calendarFilter}> 
                      <Text>Year</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  Topcontainer: {
    flexDirection: "row",
    gap:20,
    marginTop:100,
    marginLeft: 200,
  },
  onGoingtaskcontainer: {
    width: 350,
    height: 350,
    backgroundColor: "#161817",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 20,
  },
  firstplayButton: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderColor: "white",
    borderWidth:1,
    marginTop: 20,
  },

  timeContainer: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: "center",
    
  },
  timeBox: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: "red",
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical:10,
    width: 120,
  },
  timeLabel: {
    color: 'gray',
    fontSize: 14,
  },
  time: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskcontainer: {
    width: 400,
    height: 350,
    backgroundColor: "#161817",
    padding: 20,
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  header: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  taskCount: {
    backgroundColor: "#333",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    fontSize: 14,
    color: "#FFF",
  },
  manageButton: {
    color: "#AAA",
    fontSize: 14,
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  taskTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskDescription: {
    color: "#AAA",
    fontSize: 14,
  },
  starIcon: {
    marginLeft: 10,
  },

  meetingcontainer: {
    width: 400,
    height: 350,
    backgroundColor: "#161817",
    padding: 20,
    borderRadius: 20,
  },
  meetingsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  meetingCard: {
    backgroundColor: "#222",
    width: "48%",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  meetingTime: {
    color: "#AAA",
    fontSize: 14,
  },
  meetingTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  meetingIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  scheduleCard: {
    backgroundColor: "#111",
    borderColor: "#357ABD",
    borderWidth: 1,
  },

  calendar: {
    backgroundColor: "white",
    width: 1300,
    height: "100%",
    marginLeft: 200,

  },

  calendarHeader: {
    flexDirection: "row",
  },

  calendarFilter: {
    flexDirection: "row",
    backgroundColor: "red",
    borderRadius:100,
    paddingHorizontal:5,
  },

  todayFilter:{
    flexDirection: "row",
    backgroundColor: "grey",
  },

});

export default Home;