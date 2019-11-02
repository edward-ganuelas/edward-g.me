import client from '@/directus';

export default {
    data() {
        return {
            facts: []
        }
    },
    methods: {
        async getFacts() {
            const response = await client.getItems('facts');
            this.facts = response.data.map(fact => fact.fact);
        }
    }
}