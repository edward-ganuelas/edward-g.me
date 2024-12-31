import client from '@/directus';
import { ref } from 'vue';

export function useFacts() {
    const facts = ref([]);

    async function getFacts() {
        const response = await client.getItems('facts');
        facts.value = response.data.map(fact => fact.fact);
    }

    return { facts, getFacts }
}