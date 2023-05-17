
    body {
      font-family: Arial, sans-serif;
      line-height: 1.5;
      margin: 20px;
    }

    h1 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 22px;
      margin-bottom: 15px;
    }

    code {
      font-family: Consolas, monospace;
      background-color: #f2f2f2;
      padding: 2px 5px;
      border-radius: 4px;
    }
  </style>
</head>

<body>
  <h1>Cryptography Algorithms - Substitution, Polybius, and Caesar Shift Ciphers</h1>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository to your local machine.</li>
    <pre><code>git clone https://github.com/your-username/your-project.git</code></pre>
    <li>Install the necessary dependencies.</li>
    <pre><code>npm install</code></pre>
    <li>Run the project.</li>
    <pre><code>npm start</code></pre>
  </ol>

  <h2>Usage</h2>

  <h3>Substitution Cipher</h3>
  <p>The substitution cipher replaces each letter in the message with a corresponding letter from a substitution alphabet.
    To use the substitution cipher, follow these steps:</p>
  <pre><code>const { substitution } = require('./substitution');

const message = "hello world";
const alphabet = "zyxwvutsrqponmlkjihgfedcba";

const encodedMessage = substitution(message, alphabet);
console.log(encodedMessage); // Output: svool dliow
</code></pre>

  <h3>Polybius Square Cipher</h3>
  <p>The Polybius square cipher encodes each letter in the message as a pair of numbers representing its row and column
    in a square grid. To use the Polybius square cipher, follow these steps:</p>
  <pre><code>const { polybius } = require('./polybius');

const message = "hello world";

const encodedMessage = polybius(message);
console.log(encodedMessage); // Output: 3251131343 25432451
</code></pre>

  <h3>Caesar Shift Cipher</h3>
  <p>The Caesar shift cipher shifts each letter in the message by a fixed number of positions in the alphabet.
    To use the Caesar shift cipher, follow these steps:</p>
  <pre><code>const { caesar } = require('./caesar');

const message = "hello world";
const shift = 3;

const encodedMessage = caesar(message, shift);
console.log(encodedMessage); // Output: khoor zruog
</code></pre>

  <h2>Contributing</h2>
  <p>Contributions are welcome! If you'd like to contribute to this project, please follow these steps:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch.</li>
    <li>Make your changes and commit them
