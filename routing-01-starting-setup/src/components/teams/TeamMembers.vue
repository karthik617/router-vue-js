<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['teams', 'users'],
  props:['teamId'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadMembers(teamId) {
      // const teamId = route.params.teamId;
      // console.log(teamId)
      const selectTeam = this.teams.find((team) => team.id === teamId);
      const members = selectTeam.members;
      // console.log(members)
      const selectMember = [];
      for (const member of members) {
        const mem = this.users.find((user) => user.id === member);
        // console.log(mem)
        selectMember.push(mem);
      }
      this.members = selectMember;
      this.teamName = selectTeam.name;
    },
  },
  created() {
    this.loadMembers(this.teamId)
  },
  watch:{
    teamId(newVal){
      this.loadMembers(newVal)
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
