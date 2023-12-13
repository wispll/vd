import { defineStore } from "pinia";

export const useSpoilsStore = defineStore("spoils", {
  state: () => {
    return {
      spoils: [
        {
          id: '',
          data: {
            
          }
        }
      ]
    };
  },
  getters: {
    getSpoils: (state) => {
      return (userId) => state.spoils.find((spoil) =>  spoil.id === userId ) 
    },
  },
  actions: {
    saveSpoils(userId, itemId) {
      let person = this.spoils.find((spoil) => spoil.id === userId)
      if(!person){
        this.spoils.push({ 
            id: userId,
            data: {

            }
         })
        person = this.spoils.find((spoil) => spoil.id === userId)
      }


      if (!person.data[itemId]) {
        person.data[itemId] = 0
      }
      person.data[itemId] +=1
    }
  },
});

