interface Room {
    id: string;
    userName: string;
    recentMessage: string;
    time: string;
    userProfilePic: string;
  }
  
  interface ChatMessage {
    senderId: string;
    content: string;
    timestamp: Date;
  }