import Reply from '../components/reply';
import Header from './components/header';
import React, { useState } from 'react';
import Messages from './components/messages';

const Chat = () => {
  const user = {
    name: 'Tayfun Erbilen',
    avatar:
      'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg',
  };

  const [messages, setMessages] = useState([
    {
      from: {
        id: '1asIDyQkG5O6rEfLTmLN1SMWCEb2',
        name: 'Tayfun Erbilen',
        username: 'tayfunerbilen',
        avatar:
          'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
      },
      message: 'grup',
    },
    {
      from: {
        id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
        name: 'ömer',
        username: 'Elwron',
        avatar:
          'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg',
      },
      message: 'test',
    },
    {
      from: {
        id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
        name: 'ömer',
        username: 'Elwron',
        avatar:
          'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg',
      },
      message: 'deneme',
    },
    {
      from: {
        id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
        name: 'ömer',
        username: 'Elwron',
        avatar:
          'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg',
      },
      message: 'adana',
    },
    {
      from: {
        id: '1asIDyQkG5O6rEfLTmLN1SMWCEb2',
        name: 'Tayfun Erbilen',
        username: 'tayfunerbilen',
        avatar:
          'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
      },
      message:
        'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet',
    },
    {
      from: {
        id: '1asIDyQkG5O6rEfLTmLN1SMWCEb2',
        name: 'Tayfun Erbilen',
        username: 'tayfunerbilen',
        avatar:
          'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
      },
      message: 'grup',
    },
    {
      from: {
        id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
        name: 'ömer',
        username: 'Elwron',
        avatar:
          'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg',
      },
      message: 'test',
    },
    {
      from: {
        id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
        name: 'ömer',
        username: 'Elwron',
        avatar:
          'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg',
      },
      message: 'deneme',
    },
    {
      from: {
        id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
        name: 'ömer',
        username: 'Elwron',
        avatar:
          'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg',
      },
      message: 'adana',
    },
    {
      from: {
        id: '1asIDyQkG5O6rEfLTmLN1SMWCEb2',
        name: 'Tayfun Erbilen',
        username: 'tayfunerbilen',
        avatar:
          'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
      },
      message:
        'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet',
    },
    {
      from: {
        id: '1asIDyQkG5O6rEfLTmLN1SMWCEb2',
        name: 'Tayfun Erbilen',
        username: 'tayfunerbilen',
        avatar:
          'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
      },
      message: 'grup',
    },
    {
      from: {
        id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
        name: 'ömer',
        username: 'Elwron',
        avatar:
          'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg',
      },
      message: 'test',
    },
    {
      from: {
        id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
        name: 'ömer',
        username: 'Elwron',
        avatar:
          'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg',
      },
      message: 'deneme',
    },
    {
      from: {
        id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
        name: 'ömer',
        username: 'Elwron',
        avatar:
          'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg',
      },
      message: 'adana',
    },
    {
      from: {
        id: '1asIDyQkG5O6rEfLTmLN1SMWCEb2',
        name: 'Tayfun Erbilen',
        username: 'tayfunerbilen',
        avatar:
          'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
      },
      message:
        'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet',
    },
  ]);
  return (
    <div className="flex-1">
      <Header user={user} />
      <Messages messages={messages} />
      <Reply />
    </div>
  );
};

export default Chat;
