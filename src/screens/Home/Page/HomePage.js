import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomePage({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <Button onPress={()=>navigation.openDrawer()} title="|||"></Button>
      </View>
        
    )
}
