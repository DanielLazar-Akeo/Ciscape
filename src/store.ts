import { reactive } from 'vue';

interface searchTimelineTemplate {
  id?: number | undefined;
  query?: string;
}

export const store = reactive({
  count: 0,
  searchTimeline: <any>[],
  formState: 'normal',
  isLoading: false,
  ASYNC_FAKE_DELAY: 10000,
  increment() {
    this.count++;
  },
  setFakeLoading(state: boolean): void {
    this.isLoading = state;
  },
  getFakeLoading(): boolean {
    return this.isLoading;
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