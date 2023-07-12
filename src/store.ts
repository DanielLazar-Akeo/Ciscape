import { reactive } from 'vue';

export const store = reactive({
  count: 0,
  searchTimeline: [],
  increment() {
    this.count++;
  },
  setSearchTimeline(data: object) {
    this.searchTimeline.push(data);
  }
});