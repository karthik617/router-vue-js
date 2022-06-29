import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-member',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    // {path:'/teams' ,component: TeamsList,alias:'/'},
    { path: '/users', component: UsersList },

    { path: '/:notFound(.*)', redirect: '/teams' },
    //use can also  create an Not found and point to that template by importing
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
