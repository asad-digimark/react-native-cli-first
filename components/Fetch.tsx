import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.warn('Calling');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => setPosts(posts))
      .catch(err => console.error(err));
  }, []);

  // console.log(posts);

  return (
    <View>
      {posts.length ? (
        <FlatList
          data={posts}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  elevation: 1,
                  shadowColor: 'black',
                  shadowOpacity: 1,
                  shadowRadius: 8,
                  margin: 8,
                }}>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
              </View>
            );
          }}
          style={{
            backgroundColor: 'red',
          }}
        />
      ) : null}
    </View>
  );
};
