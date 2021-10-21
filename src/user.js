import GUN from "gun";
import "gun/sea"; // SEA = Security, Encryption & Authorization
import "gun/axe"; // AXE = Advanced Exchange Equation
import { writable } from "svelte/store";

// database
export const db = GUN();
export const user = db.user().recall({ sessionStorage: true });

// Current user's username (useful for GLOBAL APP STATE)
export const username = writable("");
user.get("alias").on((v) => username.set(v));

db.on("auth", async (event) => {
  const alias = await user.get("alias");
  username.set(alias);
  console.log(`signed in as ${alias}`);
});
