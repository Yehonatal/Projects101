<script setup>
import IconOne from "../assets/images/icon-supervisor.svg";
import IconTwo from "../assets/images/icon-team-builder.svg";
import IconThree from "../assets/images/icon-calculator.svg";
import IconFour from "../assets/images/icon-karma.svg";
</script>

<template>
    <!-- Cards -->
    <div
        class="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4 gap-6 text-left"
    >
        <section
            class="text-black bg-white p-6 rounded-lg shadow-lg border-t-[5px] border-t-[red] border-0 card lg:row-start-2 lg:row-span-2"
        >
            <h1 class="text-lg font-bold">Supervisor</h1>
            <p class="font-light mt-2">
                Monitors activity to identify project roadblocks.
            </p>
            <div class="mt-10 flex justify-end">
                <img :src="IconOne" alt="supervisor card Icon" />
            </div>
        </section>
        <section
            class="text-black bg-white p-6 rounded-lg shadow-lg border-t-[5px] border-t-[Cyan] border-0 card lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
        >
            <h1 class="text-lg font-bold">Team Builder</h1>
            <p class="font-light mt-2">
                Scans our talent network to create the optimal team for your
                project.
            </p>
            <div class="mt-10 flex justify-end">
                <img :src="IconTwo" alt="supervisor card Icon" />
            </div>
        </section>
        <section
            class="text-black bg-white p-6 rounded-lg shadow-lg border-t-[5px] border-t-[Orange] border-0 card lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-5"
        >
            <h1 class="text-lg font-bold">Calculator</h1>
            <p class="font-light mt-2">
                Uses data from past projects to provide better delivery
                estimates.
            </p>
            <div class="mt-10 flex justify-end">
                <img :src="IconThree" alt="supervisor card Icon" />
            </div>
        </section>
        <section
            class="text-black bg-white p-6 rounded-lg shadow-lg border-t-[5px] border-t-[Blue] border-0 card lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4"
        >
            <h1 class="text-lg font-bold">Karma</h1>
            <p class="font-light mt-2">
                Regularly evaluates our talent to ensure quality.
            </p>
            <div class="mt-10 flex justify-end">
                <img :src="IconFour" alt="supervisor card Icon" />
            </div>
        </section>
    </div>
</template>

<style></style>
