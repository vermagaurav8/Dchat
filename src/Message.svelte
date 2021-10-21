<script>
  export let message;
  export let sender;

  const messageClass = message.who === sender ? "sent" : "received";
  const avatar = `https://avatars.dicebear.com/api/initials/${message.who}.svg`;
  const timeStamp = new Date(message.when);
</script>

<div class={`message ${messageClass}`}>
  <img src={avatar} alt="Avatar" />
  <div class="message-text">
    <p>{message.what}</p>
    <time>{timeStamp.toLocaleTimeString()}</time>
  </div>
</div>
