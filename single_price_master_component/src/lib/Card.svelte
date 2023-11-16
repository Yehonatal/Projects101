<script lang="ts">
    import Tag from "./Tag.svelte";
</script>

<div class="md:grid md:grid-cols-2 max-w-3xl shadow-xl rounded-2xl relative">
    <!-- Col 1 -->
    <div
        class="p-8 md:p-10 col-span-2 flex gap-2 flex-col bg-boxOne rounded-t-lg"
    >
        <h2 class="text-3xl mb-4 font-semibold text-boxTwo">
            Join our community
        </h2>
        <h4 class="text-xl font-bold text-accentMain">
            30-day, hassle-free money back guarantee
        </h4>
        <p class="text-customGrayishBlue">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
        </p>
    </div>

    <!-- Col 2 -->
    <div class="p-8 md:p-10 flex gap-2 flex-col bg-boxTwo md:rounded-bl-lg">
        <h4 class="text-xl font-bold">Monthly Subscription</h4>
        <h1 class="text-3xl font-extrabold">
            &dollar;29
            <span class="text-lg font-normal">per month</span>
        </h1>
        <p class="mb-6">Full access for less than &dollar;1 a day</p>
        <button
            class="px-10 py-3 font-extrabold rounded-md bg-accentMain shadow-md hover:bg-white hover:text-accentMain transition-all"
        >
            Sign Up
        </button>
    </div>

    <!-- Col 3 -->
    <div
        class="p-8 md:p-10 bg-boxThree md:rounded-br-lg md:rounded-b-[0] rounded-b-lg"
    >
        <h4 class="font-bold mb-2 text-xl">Why Us</h4>
        <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
        </ul>
    </div>
</div>

<Tag />
