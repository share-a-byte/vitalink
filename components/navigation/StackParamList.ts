export type StackParamList = {
    ChatList: undefined; // No parameters for the ChatList screen
    ChatScreen: { chatRoomId: string; userId: string }; // Parameters for the ChatScreen
  };