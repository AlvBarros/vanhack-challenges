const autocorrect = input => {
    /*
    - "youuuuu" with any number of "u" characters tacked onto the end
    - "u" at the beginning, middle, or end of a string, but NOT part of a word
    - "you" but NOT as part of another word like "young" or "Bayou"
    */
   input = input.replace(/(?<=[^a-zA-Z]|^)yo[u]+(?=[^a-z]|$|\W)/gi, 'your client');
   input = input.replace(/(?<=[^a-z|^])[u](?=[^a-z]|$)/gi, 'your client');
   return input;
}