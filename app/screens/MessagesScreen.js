import React, {useState} from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';



import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [

{
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg')
},
{
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg')
},
]



function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
    // delete message from messages array

    setMessages(messages.filter(m => m.id !== message.id));
    };

    return (
        <Screen>
            
       <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
            
            <ListItem
                title={item.title}
                description={"htfyhyrhtfyhyrhtfyhyrhtfyhyrhtfyhyrhtfyhyrhtfyhyrhtfyhyrhtfyhyrhtfyhyrhtfyhyrhtfyhyrhtfyhyr"}
                image={item.image}
                onPress={() => console.log("Message selected", item)}
                renderRightActions={() => 
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            />
            )}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 1,
                        title: 'T1',
                        description: 'D1',
                        image: require('../assets/mosh.jpg')
                    },
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/mosh.jpg')
                    },
                ])

            }}
       />
       </Screen>
    );
}

const styles = StyleSheet.create({
    
});

export default MessagesScreen;