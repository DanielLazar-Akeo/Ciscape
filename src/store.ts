import { reactive } from 'vue';

interface searchTimelineTemplate {
  id?: number | undefined;
  query?: string;
}

export const store = reactive({
  count: 0,
  searchTimeline: <any>[],
  formState: 'normal',
  increment() {
    this.count++;
  },
  setSearchTimeline(data: searchTimelineTemplate): void {
    this.searchTimeline = [...this.searchTimeline, data]
  },
  getSearchTimelineLength(): number {
    return this.searchTimeline.length;
  },
  setFormState(data: string): void {
    this.formState = data;
  }
});