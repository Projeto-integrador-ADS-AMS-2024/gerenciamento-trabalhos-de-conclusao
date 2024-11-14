<template>
    <!-- color="surface-light" -->
    <v-card
        class="mx-auto"
    >
        <v-card-text>
            <v-text-field
                :loading="loading"
                append-inner-icon="mdi-magnify"
                density="compact"
                label="Procurar Turmas"
                variant="solo"
                hide-details
                single-line
                @click:append-inner="onClick"
            ></v-text-field>
        </v-card-text>
    </v-card>
</template>
<script>
    export default {
        data: () => ({
            loaded: false,
            loading: false,
        }),

        methods: {
            onClick () {
                this.loading = true

                setTimeout(() => {
                    this.loading = false
                    this.loaded = true
                }, 2000)
            },
        },
    }
</script>

<style scoped>
    .v-card{
        background-color: var(--bg-body);
        border: none;
        box-shadow: none;
    }
</style>