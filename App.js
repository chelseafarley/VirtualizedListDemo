import { StyleSheet, Text, View, SafeAreaView, VirtualizedList } from 'react-native';

export default function App() {
  const data = [
    {
      id: 1,
      title: "Item 1"
    },
    {
      id: 2,
      title: "Item 2"
    },
    {
      id: 3,
      title: "Item 3"
    },
    {
      id: 4,
      title: "Item 4"
    },
    {
      id: 5,
      title: "Item 5"
    }
  ];

  const getItem = (data, index) => {
    return data[index]
  };

  const loadMoreItems = () => {
    data.push({
      title: `New Item ${data.length}`,
      id: data.length
    });
  }
  
  const Item = (item) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  const Separator = () => (
    <View style={styles.divider}></View>
  );

  const EmptyList = () => <Text style={styles.title}>No items :(</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        style={styles.list}
        data={data}
        initialNumToRender={4}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => <Item title={item.title} key={item.id} />}
        keyExtractor={item => item.key}
        getItemCount={data => data.length}
        getItem={getItem}
        onEndReached={loadMoreItems}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    height: 200,
    alignSelf: 'stretch',
    padding: 16,
    margin: 16,
    backgroundColor: "#aa0022"
  },
  title: {
    fontSize: 20
  },
  list: {
    alignSelf: "stretch"
  },
  divider: {
    height: 8,
    backgroundColor: "black"
  }
});
