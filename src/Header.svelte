<script>
  import { username, user } from "./user";

  function signout() {
    user.leave();
    username.set("");
  }
</script>

<header>
  <h1>🔫💬</h1>
  {#if $username}
    <div class="user-bio">
      <span> Hello <strong>{$username}</strong></span>
      <img
        src={`https://avatars.dicebear.com/api/initials/${$username}.svg`}
        alt="avatar"
      />
    </div>

    <button class="signout-button"> Sign Out </button>
  {:else}
    <h3>DCHAT App</h3>
  {/if}
</header>
