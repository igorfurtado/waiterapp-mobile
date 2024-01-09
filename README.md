
# Waiter App Mobile

Aplicação mobile para cadastro de pedidos em um restaurante.

Esta interface permite as seguintes ações:
- Visualização dos itens do cardápio;
- Cadastro de novos pedidos por mesa.

![logo](https://github.com/igorfurtado/waiterapp-mobile/assets/70289587/31f98dcd-492e-464f-8fd2-495c9d2a674c)<svg xmlns="http://www.w3.org/2000/svg" width="334" height="140" fill="none"><path fill="#8A1114" d="M87.395 140c39.148 0 70.883-1.853 70.883-4.138 0-2.286-31.735-4.139-70.883-4.139-39.147 0-70.882 1.853-70.882 4.139 0 2.285 31.735 4.138 70.882 4.138Z" opacity=".4"/><path fill="#263238" d="M66.7 27.434c-2.848 2.347-5.63 6.13-4 10.236 1.63 4.106 12.064 4.519 14.258 2.83 2.852-2.194.333-11.962-1.89-12.02-.168-3.623-5.988-3.01-8.368-1.046Z"/><path fill="#FFB573" d="M62.711 66.972s1.145 20.816 2.406 32.087c.128 10.583 2.559 34.492 2.559 34.492h2.672c.45-11.863 3.751-22.94 1.558-33.403 5.118-20.546 1.612-33.162 1.612-33.162l-10.807-.014Z"/><path fill="#FFB573" d="M65.621 66.986s5.502 23.09 7.008 32.924c1.587 10.332 3.949 30.38 3.84 33.634h2.306s3.875-20.283.289-33.268c2.957-29.247-4.34-33.268-4.34-33.268l-9.103-.022ZM52.428 40.28c-.172-1.246-2.46-1.352-2.46-1.352l-1.098-.552a.87.87 0 0 0-1.18.263l-.366.607a1.097 1.097 0 0 0 .406 1.367l.332.241c.566.405 1.236.64 1.93.677l1.013.055a1.86 1.86 0 0 0 .658-.08 1.097 1.097 0 0 0 .754-1.226h.01Z"/><path fill="#FFB573" d="M64.48 47.574a5.51 5.51 0 0 1-.314.303l-.288.256c-.19.161-.388.31-.582.46a17.55 17.55 0 0 1-1.21.82c-.829.499-1.7.924-2.603 1.272a16.142 16.142 0 0 1-5.637 1.097h-.168a2.15 2.15 0 0 1-.764-.158 2.365 2.365 0 0 1-.732-.475 3.221 3.221 0 0 1-.661-.936 7.11 7.11 0 0 1-.508-1.546 18.094 18.094 0 0 1-.366-2.786 35.677 35.677 0 0 1 .11-5.381.819.819 0 0 1 1.627-.022v.022c.197 1.703.424 3.433.73 5.089.136.802.323 1.594.56 2.372.095.319.224.625.388.914.065.106.131.157.102.12a.45.45 0 0 0-.175-.116.698.698 0 0 0-.187-.055h-.099a16.077 16.077 0 0 0 2.333-.387c.76-.19 1.505-.435 2.23-.732a14.58 14.58 0 0 0 2.08-1.096 13.5 13.5 0 0 0 1.411-.998l.212-.176.161-.143.095-.084a1.642 1.642 0 0 1 2.252 2.388l.004-.022Z"/><path fill="#E0E0E0" d="M66.28 43.516c-2.893-.483-5.928 1.484-7.5 3.084-.811 2.442 1.788 5.41 1.788 5.41s3.703-2.273 5.038-3.827c1.334-1.553 2.34-4.39.672-4.668Z"/><path fill="#263238" d="M75.236 66.708s4.08 2.896 4.848 12.521c.307 3.791.859 18.916 2.021 25.423-4.186 2.99-16.718 2.581-18.68.833.555-13.16-4.476-30.617-.827-38.645 6.04-.742 12.638-.132 12.638-.132Z"/><path fill="#000" d="M71.098 94.313c.055-5.53-.76-13.142-3.236-17.654.845 5.63 3.236 17.654 3.236 17.654Z" opacity=".2"/><path fill="#E0E0E0" d="M60.682 47.976c0 3.133-2.497 4.778.33 7.19.167 2.706.365 7.55 1.195 11.963.859 1.195 7.14 1.096 13.665-.318-.852-3.784-.537-9.948 1.697-18.378a3.505 3.505 0 0 0-2.794-4.318 32.452 32.452 0 0 0-1.689-.256c-2.04-.3-4.1-.454-6.163-.46-.666 0-1.356.044-2.015.088a4.504 4.504 0 0 0-4.226 4.489Z"/><path fill="#8A1114" d="m74.014 53.416-7.66 1.734a.541.541 0 0 0-.407.647l2.48 10.95a.541.541 0 0 0 .646.408l7.66-1.734a.541.541 0 0 0 .407-.648l-2.48-10.95a.541.541 0 0 0-.646-.407Zm-6.334-5.978s-1.24 1.485-2.263 1.828l-.117.732a5.55 5.55 0 0 0 3.374-1.74l-.995-.82Zm-3.367-.895s-.052 1.93.482 2.873l-.398.63a5.56 5.56 0 0 1-1.382-3.54l1.297.037Z"/><path fill="#FFB573" d="M72.834 36.906c-.49 1.945-1.064 5.531.252 6.946 0 0-4.902 1.338-8.097 5.725-1.463-4.61 1.948-6.185 1.948-6.185 2.234-.366 2.263-1.997 1.956-3.561l3.941-2.925Z"/><path fill="#000" d="m71.23 38.102-2.333 1.736a6.4 6.4 0 0 1 .131 1.097c.849-.059 2.055-.896 2.194-1.77a3.08 3.08 0 0 0 .007-1.063Z" opacity=".2"/><path fill="#FFB573" d="M75.108 33.44c-.94 3.152-1.268 4.508-3.246 5.747-2.976 1.861-6.58-.054-6.603-3.44 0-3.049 1.525-7.677 4.914-8.181 3.389-.505 5.89 2.72 4.935 5.874Z"/><path fill="#263238" d="M72.651 28.838c-.888 3.038-.127 6.215 1.686 6.58 2.519-.94 2.394-3.736 1.75-5.016-.642-1.28-2.924-3.315-3.436-1.564Z"/><path fill="#263238" d="M74.03 34.296c-1.4.464-1.671 1.404-1.671 1.404s.961-.68 1.883-.552a1.974 1.974 0 0 1-.212-.852Zm-3.499-1.152c-.062.26-.249.435-.42.395-.172-.04-.264-.292-.201-.552.062-.26.248-.439.42-.395.172.044.249.293.201.552Zm-3.243-.771c-.062.26-.248.435-.42.391-.172-.044-.263-.289-.201-.552.062-.263.248-.435.42-.391.172.044.267.289.201.552Z"/><path fill="#263238" d="m67.168 31.854-.589-.34s.209.57.589.34Z"/><path fill="#ED893E" d="M67.903 32.797a6.904 6.904 0 0 1-1.324 1.426 1.193 1.193 0 0 0 .896.413l.428-1.839Z"/><path fill="#FFB573" d="M75.126 36.603a2.08 2.08 0 0 1-1.568.73c-.764-.021-.896-.898-.475-1.619.365-.65 1.228-1.422 1.894-1.053.665.37.668 1.35.15 1.942Z"/><path fill="#263238" d="M71.142 32.026a.168.168 0 0 1-.084-.096 1.31 1.31 0 0 0-.79-.84.161.161 0 0 1-.088-.25.15.15 0 0 1 .165-.054 1.616 1.616 0 0 1 1.012 1.05.15.15 0 0 1-.098.197.16.16 0 0 1-.117-.007Zm-5.031-1.21a.165.165 0 0 1-.113-.04.16.16 0 0 1 0-.224 1.546 1.546 0 0 1 1.33-.526.165.165 0 0 1 .136.183.157.157 0 0 1-.18.131 1.216 1.216 0 0 0-1.049.424.16.16 0 0 1-.124.052Zm4.292 1.813-.589-.344s.209.574.59.344Z"/><path fill="#FFB573" d="m70.213 58.585-2.925-.567.33 3.36s2.193-.095 3.443-1.097l.117-.438c-.135-.728-.3-.995-.965-1.258Z"/><path fill="#FFB573" d="m65.53 59.452.34 1.422a.84.84 0 0 0 .943.632l.819-.128-.329-3.36-1.247.454a.837.837 0 0 0-.526.98Zm11.223-12.88a43.674 43.674 0 0 1 2.322 5.264c.329.903.64 1.828.888 2.775.271.981.455 1.985.548 2.998.022.267.033.541.037.819v.256a2.071 2.071 0 0 1-.307.888c-.17.263-.391.488-.65.662a3.428 3.428 0 0 1-1.04.464 7.057 7.057 0 0 1-.85.18c-.997.125-2.003.163-3.006.113a38.89 38.89 0 0 1-5.663-.68.815.815 0 0 1 .14-1.62c1.827-.033 3.677-.08 5.457-.216.853-.059 1.7-.18 2.534-.365.17-.04.337-.09.5-.154a.57.57 0 0 0 .22-.117.464.464 0 0 0-.168.172.927.927 0 0 0-.14.399.47.47 0 0 0 0 .073c0-.187-.032-.366-.061-.57a24.345 24.345 0 0 0-1.488-4.94 73.957 73.957 0 0 0-2.194-4.91v-.029a1.646 1.646 0 0 1 2.925-1.484l-.004.022Z"/><path fill="#E0E0E0" d="M74.966 44.229c2.094.387 3.027 2.27 4.547 6.028-.464 2.53-4.182 3.86-4.182 3.86s-2.135-3.783-2.559-5.79c-.424-2.007.08-4.49 2.194-4.098Z"/><path fill="#263238" d="M70.538 133.58a.228.228 0 0 0-.24-.149l-2.48-.037a1.356 1.356 0 0 0-.73.157 9.291 9.291 0 0 1-3.737 1.335c-.526.08-.289.968.954.983 2.051.022 2.424-.132 4.175-.113 1.495.018.782.084 1.97.113.286 0 .52-.179.483-.366l-.395-1.923Zm8.552 0a.23.23 0 0 0-.242-.149l-2.022-.037a1.338 1.338 0 0 0-.73.157c-.732.508-.63 1.097-2.297 1.335-.526.08-.267.968.976.983 2.051.022 1.927-.113 2.76-.113.834 0 .322.084 1.514.113.285 0 .515-.179.472-.366l-.432-1.923Z"/><path fill="#FAFAFA" d="M66.33 48.002c1.039.043 2.943.895 3.554 1.805.863-.895 4.233-2.975 4.292-5.794a2.925 2.925 0 0 0-1.495-.768s-4.497 2.175-6.35 4.757Zm-1.681-.147s-.282-2.277 2.475-4.49c-.278-.226-1.367.03-1.367.03s-3.221 1.386-3.126 4.972a2.767 2.767 0 0 1 2.018-.512Z"/><path fill="#8A1114" d="M64.24 48.82c-.4.187-.556 1.485 0 1.788.555.303.5-.936.822-1.36.322-.424-.124-.753-.823-.428Z"/><path fill="#8A1114" d="M64.73 49.325c-.286.365.083 1.608.697 1.605.615-.004.085-1.097.205-1.638.12-.541-.416-.61-.903.033Z"/><path fill="#8A1114" d="M64.813 50.25c-.683-1.057-.73 4.511.925 6.705-.11-2.161 1.05-5.225-.925-6.705Z"/><path fill="#8A1114" d="M64.751 50.202c-.303-1.075-1.828 3.634-.983 5.934.479-1.861 2.266-4.157.983-5.934Z"/><path fill="#263238" d="M69.847 35.641c.16-.07.313-.152.457-.248a.087.087 0 0 0 .02-.096.086.086 0 0 0-.02-.029.099.099 0 0 0-.131-.022 2.625 2.625 0 0 1-2.245.326.093.093 0 0 0-.07-.002.092.092 0 0 0-.05.05.091.091 0 0 0 .054.116 2.78 2.78 0 0 0 1.985-.095Z"/><path fill="#8A1114" d="M59.238 38.218H40.561v.607h18.677v-.607Zm-.446.607H41.007l.782.424h16.22l.783-.424Z"/><path fill="#000" d="M58.792 38.825H41.007l.782.424h16.22l.783-.424Z" opacity=".2"/><path fill="#263238" d="M46.545 21.961a.417.417 0 0 1-.413-.413v-1.385a.417.417 0 0 1 .413-.414.417.417 0 0 1 .413.414v1.385a.417.417 0 0 1-.413.413Z"/><path fill="#263238" d="M47.21 20.078v-.182a.322.322 0 0 0-.321-.322h-.687a.322.322 0 0 0-.322.322v.182c0 .178.144.322.322.322h.687a.322.322 0 0 0 .322-.322Z"/><path fill="#8A1114" d="M47.207 24.97v-3.952a.165.165 0 0 0-.16-.165h-1.003a.165.165 0 0 0-.16.165v3.952a2.1 2.1 0 0 1-.706 1.572 2.127 2.127 0 0 0-.706 1.576v10.137h4.142V28.118a2.115 2.115 0 0 0-.705-1.576 2.11 2.11 0 0 1-.702-1.572Z"/><path fill="#E0E0E0" d="M48.614 29.317H45.88v6.554h2.734v-6.554Z"/><path fill="#8A1114" d="M52.497 38.218h-.494c.165.012.33.012.494 0Zm2.979 0h-.497c.166.011.332.011.497 0Z"/><path fill="#8A1114" d="M51.835 30.486v1.664c0 1.323.753 2.424 1.707 2.559v2.925c0 .45-.438.577-.778.606h1.948c-.34-.029-.778-.157-.778-.606v-2.925c.954-.132 1.707-1.232 1.707-2.56v-1.663h-3.806Z" opacity=".2"/><path fill="#263238" d="M74.487 28.922c-1.463.621-6.361.811-8.28.395 1.984-2.804 6.444-3.627 8.28-.395Zm4.61 10.017a.095.095 0 0 1-.073-.037c-.048-.066-1.127-1.652-1.148-5.9 0-1.773-.545-3.2-1.463-3.92a1.978 1.978 0 0 0-1.736-.394.09.09 0 0 1-.07-.012.092.092 0 0 1 .029-.167 2.193 2.193 0 0 1 1.887.427c.969.757 1.528 2.238 1.539 4.062.022 4.182 1.097 5.784 1.097 5.798a.09.09 0 0 1 .015.069.092.092 0 0 1-.037.06.102.102 0 0 1-.04.014Zm26.307-21.522c1.02 1.396 1.016 3.572.669 4.752-1.828-.83-1.543-3.213-1.543-3.213l.874-1.539Z"/><path fill="#E0E0E0" d="m110.869 34.702 1.053 1.159 1.097 1.177a69.043 69.043 0 0 0 2.215 2.27c.366.365.731.731 1.123 1.053.391.322.731.665 1.115.961.384.296.731.56 1.071.786.256.172.525.324.804.454l-.559-.088a.73.73 0 0 0-.475.106s.087 0 .212-.073c.339-.208.654-.453.939-.731a22.906 22.906 0 0 0 2.095-2.278 64.266 64.266 0 0 0 2.054-2.632 275.66 275.66 0 0 0 2.018-2.738l.033-.04a1.65 1.65 0 0 1 2.896 1.462 36.209 36.209 0 0 1-1.283 3.403 41.168 41.168 0 0 1-1.609 3.29 22.558 22.558 0 0 1-2.15 3.243 10.989 10.989 0 0 1-1.623 1.638 6.21 6.21 0 0 1-1.29.804 4.792 4.792 0 0 1-2.168.446 2.176 2.176 0 0 1-.41-.055l-.153-.032a10.164 10.164 0 0 1-2.307-.86 16.24 16.24 0 0 1-1.773-1.049 28.139 28.139 0 0 1-2.976-2.306 43.386 43.386 0 0 1-2.607-2.49 46.736 46.736 0 0 1-1.21-1.309 47.229 47.229 0 0 1-1.18-1.39 3.293 3.293 0 0 1 .57-4.365 3.29 3.29 0 0 1 4.401.11l.077.074Z"/><path fill="#FF8B7B" d="m127.269 36.102 3.258.157-1.057-4.387s-3.031.223-3.517 1.78a.794.794 0 0 0 .029.527l.6 1.437a.786.786 0 0 0 .687.486Z"/><path fill="#FF8B7B" d="m133.433 33.656-.629-1.462a1.308 1.308 0 0 0-1.51-.753l-1.828.45 1.057 4.386 2.193-.884a1.31 1.31 0 0 0 .727-.717 1.3 1.3 0 0 0-.01-1.02Z"/><path fill="#263238" d="M103.166 96.854c-3.458-15.212-5.597-33.553-5.597-33.553l14.181-.227s-.197 24.717-.168 35.07c.037 10.767.783 34.46.783 34.46h-4.303s-5.554-22.443-4.896-35.75Z"/><path fill="#000" d="m102.062 75.866-2.244 3.327c.669 4.153 1.462 8.726 2.387 13.208.388-6.887.322-14.89-.143-16.535Z"/><path fill="#263238" d="M118.104 134.714s-5.926-1.397-6.372-2.336h-3.29l.022 3.484h2.032l.311-.322.516.322c1.645 0 6.017-.066 7.052-.435a.774.774 0 0 0-.271-.713ZM89.976 96.426c1.642-15.3 1.59-25.52 3.59-33.06l12.913-.193s-5.378 24.267-7.875 34.365c-2.497 10.097-6.77 35.059-6.77 35.059h-3.985s-1.254-24.34 2.127-36.17Z"/><path fill="#E0E0E0" d="M92.543 66.346c-.286 1.828-1.302 12.642-2.355 16.58 8.61 3.82 21.771 2.317 22.177-.161-.121-4.592-.366-16.419-.366-16.419H92.543Z"/><path fill="#000" d="M93.022 68.353a13.085 13.085 0 0 0 2.16 2.65s-1.857-.332-2.16-2.65Zm17.306 2.548a10.7 10.7 0 0 0 1.192-2.365s.084 1.868-1.192 2.365Zm-17.226-1.169c.199.732.492 1.435.874 2.09a1.927 1.927 0 0 1-.874-2.09Z" opacity=".1"/><path fill="#263238" d="M95.548 134.714s-3.696-1.397-4.12-2.336h-3.29l-.066 3.484h2.694l.318-.322.508.322c1.645 0 3.162-.066 4.208-.435a.75.75 0 0 0-.252-.713Zm-2.457-101.87c4.563-.566 11.077-.511 15.446.242a5.29 5.29 0 0 1 4.292 4.449c.917 6.599.128 18.13-.457 29.736-9.981 3.415-20.51-.047-20.51-.047-.365-2.34.454-10.014 1.002-14.108-.822-4.23-2.559-9.074-3.721-14.693a4.604 4.604 0 0 1 3.948-5.579Z"/><path fill="#fff" d="M93.091 32.844c4.563-.566 11.077-.511 15.446.242a5.29 5.29 0 0 1 4.292 4.449c.917 6.599.128 18.13-.457 29.736-9.981 3.415-20.51-.047-20.51-.047-.365-2.34.454-10.014 1.002-14.108-.822-4.23-2.559-9.074-3.721-14.693a4.604 4.604 0 0 1 3.948-5.579Z" opacity=".1"/><path fill="#FF8B7B" d="m97.606 24.133 5.191 4.259c-.672 1.787-.884 3.655 2.048 4.361.731.969-.366 2.669-1.668 3.33-3.078-.701-4.85-1.528-6.046-3.17.376-1.286.976-6.137.475-8.78Z"/><path fill="#000" d="m99.77 25.91 3.027 2.478a6.692 6.692 0 0 0-.365 1.28c-1.174.084-2.804-1.097-2.877-2.172a4.362 4.362 0 0 1 .215-1.587Z" opacity=".2"/><path fill="#FF8B7B" d="M96.86 21.23c.475 3.257.585 5.188 2.38 6.716 2.702 2.3 6.621.427 7.133-2.925.457-3.009-.395-7.83-3.711-8.84a4.537 4.537 0 0 0-5.802 5.049Z"/><path fill="#263238" d="M96.83 22.733a2.56 2.56 0 0 0 2.695.69c-.782-.793-.022-3.695-.804-4.876 1.514.3 7.407 1.155 7.97-.889.61-2.193-1.828-3.944-3.196-4.109.403.914.366 1.576-1.133 1.28-1.499-.296-7.677-1.722-6.993 1.173-1.99 0-2.124 2.896-.67 4.281a14.985 14.985 0 0 1 2.132 2.45Z"/><path fill="#263238" d="M95.734 15.863c-1.192-.296-.819-1.393-.552-1.506-1.115.27-1.52 1.367-.175 1.872 1.345.504.727-.366.727-.366Z"/><path fill="#FF8B7B" d="M95.943 23.23a2.83 2.83 0 0 0 1.396 1.67c.896.457 1.546-.296 1.462-1.239-.069-.852-.614-2.113-1.594-2.193a1.291 1.291 0 0 0-1.264 1.762Z"/><path fill="#263238" d="M101.434 21.347c.022.267.182.472.365.457.183-.015.3-.249.278-.512-.022-.263-.183-.472-.366-.457-.182.015-.299.245-.277.512Zm3.187-.077c.022.267.183.472.366.454.183-.019.296-.245.274-.512-.022-.267-.183-.468-.365-.454-.183.015-.296.245-.275.512Z"/><path fill="#FF5652" d="M103.974 21.628a9.423 9.423 0 0 0 1.463 2.165c-.435.482-1.254.365-1.254.365l-.209-2.53Z"/><path fill="#263238" d="M100.94 20.499a.144.144 0 0 1-.077 0 .154.154 0 0 1-.087-.205 1.572 1.572 0 0 1 1.063-.972.158.158 0 1 1 .063.31 1.253 1.253 0 0 0-.838.78.157.157 0 0 1-.05.059.158.158 0 0 1-.074.028Zm5.531-.424a.152.152 0 0 1-.131-.073 1.24 1.24 0 0 0-.947-.618.156.156 0 0 1-.143-.1.157.157 0 0 1-.011-.061.16.16 0 0 1 .165-.154 1.559 1.559 0 0 1 1.206.768.163.163 0 0 1 .018.118.161.161 0 0 1-.069.098.133.133 0 0 1-.088.022Z"/><path fill="#E0E0E0" d="M97.13 32.914s5.327 8.094 7.353 13.804c1.996-6.7 2.226-12.064.365-13.965-.599.757-3.012 1.78-7.717.16Zm-1.816 5.981-.516 1.462-.511 1.521a75.181 75.181 0 0 0-.94 3.027c-.146.5-.274.998-.391 1.488-.117.49-.23.976-.311 1.44-.08.465-.142.914-.183 1.316-.02.308-.02.617 0 .925l-.19-.533c-.153-.29-.31-.366-.318-.366-.007 0 .051.073.165.154.34.2.702.362 1.078.482.972.327 1.965.588 2.972.782 1.071.212 2.175.366 3.29.549 1.116.183 2.263.31 3.367.468h.052a1.65 1.65 0 0 1 .084 3.25 36.097 36.097 0 0 1-3.601.497 37.88 37.88 0 0 1-3.656.157 22.727 22.727 0 0 1-3.875-.34 11.194 11.194 0 0 1-2.194-.647 6.043 6.043 0 0 1-1.323-.753 4.78 4.78 0 0 1-1.426-1.689 2.187 2.187 0 0 1-.15-.388l-.04-.15a10.235 10.235 0 0 1-.347-2.438c-.018-.687.008-1.374.077-2.058.116-1.25.318-2.489.603-3.71a40.79 40.79 0 0 1 .943-3.481 39.302 39.302 0 0 1 1.232-3.389 3.29 3.29 0 0 1 6.145 2.343l-.036.08Z"/><path fill="#FF8B7B" d="m103.346 52.081 3.231.402-1.784 4.135s-2.95-.73-3.162-2.354a.77.77 0 0 1 .121-.512l.833-1.312a.787.787 0 0 1 .761-.359Zm5.655 3.462-.87 1.346a1.308 1.308 0 0 1-1.616.482l-1.722-.753 1.784-4.135 2.015 1.247a1.295 1.295 0 0 1 .585.82 1.309 1.309 0 0 1-.176.993Z"/><path fill="#FAFAFA" d="M97.39 31.656a3.039 3.039 0 0 0-1.766.95 10.602 10.602 0 0 0 5.85 3.913c-.168-.56.336-2.194.892-2.779-2.044-.303-4.976-2.084-4.976-2.084Z"/><path fill="#FAFAFA" d="M103.006 31.857a5.029 5.029 0 0 1 1.934.794s2.047 2.285-.366 3.575c.164-.56-1.097-2.05-2.226-2.486 2.04-.303.658-1.883.658-1.883Z"/><path fill="#8A1114" d="M102.574 35.042c-1.616-.867-3.615-1.806-3.06-.29.556 1.518-.179 2.044.545 2.56.724.515 2.194-.9 2.68-1.097.486-.197-.165-1.173-.165-1.173Zm1.145-.012c1.232-.83 2.774-1.729 2.5-.248-.274 1.48.406 1.996-.132 2.497-.537.5-1.919-.9-2.358-1.097-.438-.197-.01-1.151-.01-1.151Z"/><path fill="#8A1114" d="M102.355 34.925c.365-.22 1.257-.497 1.7.098.442.596.3 1.594-.311 1.715a1.234 1.234 0 0 1-1.192-.42 1.095 1.095 0 0 0-.197-1.393Z"/><path fill="#000" d="m92.056 132.714-4.434.124-.234-2.511 5.151.307-.483 2.08Zm20.466-.007-4.789.131-.531-2.175 5.349-.519-.029 2.563Z"/><path fill="#fff" d="M102.084 51.23a30.043 30.043 0 0 0-6.88-1.189c-.497.03-.687 11.264-.647 15.86 0 .62 7.151.496 8.979.215.102-1.283.124-10.65.599-13.578a1.037 1.037 0 0 0-.621-1.119 2.905 2.905 0 0 0-1.43-.19Z"/><path fill="#8A1114" d="M139.516 33.247h-20.297v.577h20.297v-.577Zm-.424.577h-19.449l.746.406h17.961l.742-.406Z"/><path fill="#000" d="M139.092 33.824h-19.449l.746.406h17.961l.742-.406Z" opacity=".2"/><path fill="#8A1114" d="M130.205 25.087a.84.84 0 0 1-.998.825.836.836 0 0 1-.305-1.517.838.838 0 0 1 1.303.692Zm7.937 5.48a9.218 9.218 0 0 0-3.079-4.416l.227-.29a9.594 9.594 0 0 1 3.203 4.596l-.351.11Zm-4.347-5.257a9.11 9.11 0 0 0-1.276-.581l.124-.344a9.61 9.61 0 0 1 1.327.618l-.175.307Z"/><path fill="#8A1114" d="M129.368 25.087a8.303 8.303 0 0 0-8.303 8.302h16.605a8.302 8.302 0 0 0-8.302-8.302Z"/><path fill="#fff" d="M122.21 32.647h2.146a.322.322 0 0 0 .31-.263c.432-2.274 1.788-4.256 3.945-5.977a.286.286 0 0 0 .085-.338.288.288 0 0 0-.301-.174 7.577 7.577 0 0 0-6.503 6.394.32.32 0 0 0 .077.251.315.315 0 0 0 .241.107Z" opacity=".3"/><path fill="#263238" d="M102.954 25.109c.171.007.343-.001.512-.026a.087.087 0 0 0 .056-.037.09.09 0 0 0 .014-.065.104.104 0 0 0-.11-.077 2.558 2.558 0 0 1-2.128-.665.086.086 0 0 0-.098-.02.102.102 0 0 0-.03.02.094.094 0 0 0-.024.064c0 .023.008.046.024.064a2.718 2.718 0 0 0 1.784.742Z"/><path fill="#fff" d="m201.212 64.5-2.808-10.728-2.808 10.728h-4.584l-4.368-17.232h4.44l2.328 10.272 2.736-10.272h4.584l2.64 10.32 2.352-10.32h4.44L205.772 64.5h-4.56Zm12.48-6.768h7.32l1.176 3.576h-9.696l1.2-3.576Zm7.728 6.768-4.032-12.24-4.152 12.24h-4.584l6.384-17.232h4.968l6.312 17.232h-4.896Zm11.257 0h-4.536V47.268h4.536V64.5Zm11.858 0h-4.536V51.372h-5.28v-4.104h15.096v4.104h-5.28V64.5Zm19.517-3.936V64.5H251.86V47.268h12.024v3.936h-7.488v2.472h6.792v3.936h-6.792v2.952h7.656Zm7.133 3.936h-4.536V47.268h7.056c2.336 0 4.136.504 5.4 1.512 1.28.992 1.92 2.408 1.92 4.248 0 1.104-.32 2.096-.96 2.976-.624.864-1.52 1.544-2.688 2.04l4.224 6.456h-5.4l-3.528-5.736h-1.488V64.5Zm0-13.488v4.008h2.328c1.008 0 1.752-.16 2.232-.48.48-.32.72-.824.72-1.512 0-.688-.24-1.192-.72-1.512-.48-.336-1.224-.504-2.232-.504h-2.328Zm14.76 7.368h8.544l.36.984h-9.528l.624-.984Zm10.368 6.12-6.216-16.008-6.24 16.008h-1.152l6.792-17.232h1.272l6.744 17.232h-1.2Zm9.376-6.6h-4.224v6.6h-1.176V47.268h5.4c1.104 0 2.08.208 2.928.624a4.69 4.69 0 0 1 2.016 1.8c.496.784.744 1.744.744 2.88s-.248 2.104-.744 2.904a4.644 4.644 0 0 1-2.016 1.824c-.848.4-1.824.6-2.928.6Zm-.024-9.624h-4.2v8.64h4.2c1.376 0 2.48-.376 3.312-1.128.832-.752 1.248-1.816 1.248-3.192 0-1.392-.416-2.456-1.248-3.192-.832-.752-1.936-1.128-3.312-1.128Zm14.017 9.624h-4.224v6.6h-1.176V47.268h5.4c1.104 0 2.08.208 2.928.624a4.69 4.69 0 0 1 2.016 1.8c.496.784.744 1.744.744 2.88s-.248 2.104-.744 2.904a4.644 4.644 0 0 1-2.016 1.824c-.848.4-1.824.6-2.928.6Zm-.024-9.624h-4.2v8.64h4.2c1.376 0 2.48-.376 3.312-1.128.832-.752 1.248-1.816 1.248-3.192 0-1.392-.416-2.456-1.248-3.192-.832-.752-1.936-1.128-3.312-1.128Z"/><path fill="#fff" d="M197.479 93.74a5.665 5.665 0 0 1-4.144-1.744 5.81 5.81 0 0 1-1.216-1.904 6.396 6.396 0 0 1-.432-2.352c0-.832.144-1.61.432-2.336a5.81 5.81 0 0 1 1.216-1.904 5.51 5.51 0 0 1 1.84-1.264 5.665 5.665 0 0 1 2.304-.464c.832 0 1.6.155 2.304.464a5.51 5.51 0 0 1 1.84 1.264 5.693 5.693 0 0 1 1.232 1.904 6.27 6.27 0 0 1 .432 2.336c0 .832-.144 1.616-.432 2.352a5.693 5.693 0 0 1-1.232 1.904 5.665 5.665 0 0 1-4.144 1.744Zm0-1.072a4.54 4.54 0 0 0 1.856-.368 4.41 4.41 0 0 0 1.44-1.056 4.81 4.81 0 0 0 .928-1.584 5.423 5.423 0 0 0 .336-1.92 5.42 5.42 0 0 0-.336-1.92 4.46 4.46 0 0 0-.928-1.552 4.218 4.218 0 0 0-1.44-1.04 4.377 4.377 0 0 0-1.856-.384c-.672 0-1.291.128-1.856.384a4.218 4.218 0 0 0-1.44 1.04c-.405.437-.72.955-.944 1.552a5.675 5.675 0 0 0-.32 1.92c0 .683.107 1.323.32 1.92.224.597.539 1.125.944 1.584.405.448.885.8 1.44 1.056a4.612 4.612 0 0 0 1.856.368Zm12.571-3.328h5.552l.336.976h-6.368l.48-.976Zm6.592 4.16-3.872-10.208-3.904 10.208h-1.184l4.464-11.488h1.312l4.448 11.488h-1.264Zm10.63-4.224c0 .864-.155 1.627-.464 2.288-.299.661-.725 1.179-1.28 1.552-.544.363-1.195.544-1.952.544a3.09 3.09 0 0 1-1.712-.496c-.512-.33-.912-.795-1.2-1.392v4.816h-1.12v-11.52h1.04v1.824c.288-.63.699-1.115 1.232-1.456a3.128 3.128 0 0 1 1.76-.528c.747 0 1.397.187 1.952.56.555.363.981.875 1.28 1.536.309.65.464 1.408.464 2.272Zm-1.136 0c0-1.067-.256-1.899-.768-2.496-.501-.597-1.163-.896-1.984-.896-.512 0-.976.133-1.392.4-.416.267-.747.65-.992 1.152-.235.501-.352 1.115-.352 1.84 0 .693.117 1.296.352 1.808s.56.907.976 1.184a2.48 2.48 0 0 0 1.408.416c.821 0 1.483-.299 1.984-.896.512-.597.768-1.435.768-2.512Zm10.667 0c0 .864-.154 1.627-.464 2.288-.298.661-.725 1.179-1.28 1.552-.544.363-1.194.544-1.952.544a3.09 3.09 0 0 1-1.712-.496c-.512-.33-.912-.795-1.2-1.392v4.816h-1.12v-11.52h1.04v1.824c.288-.63.699-1.115 1.232-1.456a3.13 3.13 0 0 1 1.76-.528c.747 0 1.398.187 1.952.56.555.363.982.875 1.28 1.536.31.65.464 1.408.464 2.272Zm-1.136 0c0-1.067-.256-1.899-.768-2.496-.501-.597-1.162-.896-1.984-.896-.512 0-.976.133-1.392.4-.416.267-.746.65-.992 1.152-.234.501-.352 1.115-.352 1.84 0 .693.118 1.296.352 1.808.235.512.56.907.976 1.184.416.277.886.416 1.408.416.822 0 1.483-.299 1.984-.896.512-.597.768-1.435.768-2.512Zm5.659 0c0-.864.15-1.621.448-2.272.31-.661.742-1.173 1.296-1.536.555-.373 1.211-.56 1.968-.56.63 0 1.2.17 1.712.512.512.33.907.8 1.184 1.408v-4.816h1.12V93.5h-1.04v-1.776a3.492 3.492 0 0 1-1.232 1.424 3.072 3.072 0 0 1-1.744.512c-.757 0-1.413-.181-1.968-.544-.554-.373-.986-.89-1.296-1.552-.298-.661-.448-1.424-.448-2.288Zm1.136 0c0 1.077.251 1.915.752 2.512.502.597 1.163.896 1.984.896.555 0 1.035-.139 1.44-.416.416-.277.736-.672.96-1.184.235-.523.352-1.136.352-1.84 0-.704-.122-1.307-.368-1.808-.234-.501-.56-.885-.976-1.152-.405-.267-.874-.4-1.408-.4-.821 0-1.482.299-1.984.896-.501.597-.752 1.43-.752 2.496Zm12.396 4.384c-.576 0-1.11-.107-1.6-.32a3.74 3.74 0 0 1-1.28-.912 4.422 4.422 0 0 1-.832-1.392 5.163 5.163 0 0 1-.288-1.76c0-.63.096-1.21.288-1.744.202-.533.48-.992.832-1.376a3.74 3.74 0 0 1 1.28-.912 3.967 3.967 0 0 1 1.6-.32c.586 0 1.125.107 1.616.32.49.213.912.517 1.264.912.362.384.64.843.832 1.376.202.533.304 1.115.304 1.744a4.93 4.93 0 0 1-.304 1.76 4.08 4.08 0 0 1-.832 1.392 3.597 3.597 0 0 1-1.264.912c-.491.213-1.03.32-1.616.32Zm0-.96c.554 0 1.045-.139 1.472-.416a2.907 2.907 0 0 0 1.024-1.2c.256-.512.384-1.115.384-1.808 0-.693-.128-1.29-.384-1.792a2.815 2.815 0 0 0-1.024-1.168 2.643 2.643 0 0 0-1.472-.416 2.69 2.69 0 0 0-1.472.416 2.961 2.961 0 0 0-1.024 1.168c-.246.501-.368 1.099-.368 1.792 0 .693.122 1.296.368 1.808.256.512.597.912 1.024 1.2a2.69 2.69 0 0 0 1.472.416Zm14.403 1.04c-.822 0-1.584-.15-2.288-.448a5.802 5.802 0 0 1-1.856-1.248 5.83 5.83 0 0 1-1.232-1.888 6.53 6.53 0 0 1-.432-2.4c0-.853.138-1.637.415-2.352a5.973 5.973 0 0 1 1.201-1.904 5.267 5.267 0 0 1 1.808-1.28 5.838 5.838 0 0 1 2.304-.448c1.002 0 1.882.187 2.64.56a5.475 5.475 0 0 1 1.888 1.504 5.84 5.84 0 0 1 1.072 2.112h-1.36a4.38 4.38 0 0 0-.8-1.568 3.99 3.99 0 0 0-1.44-1.12c-.576-.277-1.254-.416-2.032-.416-.875 0-1.648.213-2.32.64-.672.416-1.2.992-1.584 1.728-.374.736-.56 1.59-.56 2.56 0 .939.192 1.781.576 2.528a4.362 4.362 0 0 0 1.616 1.76c.693.427 1.498.64 2.416.64.832 0 1.557-.16 2.176-.48a3.897 3.897 0 0 0 1.488-1.392c.384-.597.624-1.296.72-2.096h-4.512v-.976h5.76c0 .907-.139 1.728-.416 2.464a5.466 5.466 0 0 1-1.152 1.904 5.056 5.056 0 0 1-1.792 1.2c-.683.277-1.451.416-2.304.416Zm12.702-.24v-1.536a2.916 2.916 0 0 1-1.104 1.248c-.491.299-1.067.448-1.728.448-.875 0-1.574-.224-2.096-.672-.523-.459-.784-1.067-.784-1.824 0-.821.325-1.44.976-1.856.65-.427 1.616-.64 2.896-.64.256 0 .506.005.752.016.245.01.57.037.976.08v-.72c0-.704-.182-1.253-.544-1.648-.352-.395-.848-.592-1.488-.592-.683 0-1.227.203-1.632.608-.406.395-.614.933-.625 1.616h-1.023c.01-.63.154-1.173.432-1.632.277-.47.656-.832 1.136-1.088.49-.267 1.056-.4 1.696-.4.992 0 1.76.272 2.304.816.544.544.816 1.307.816 2.288V93.5h-.96Zm-4.64-2.368c0 .512.181.928.544 1.248.362.31.837.464 1.424.464.789 0 1.413-.235 1.872-.704.458-.48.688-1.115.688-1.904v-.752a17.67 17.67 0 0 0-1.68-.08c-.95 0-1.664.144-2.144.432-.47.277-.704.71-.704 1.296Zm9.076-2.144V93.5h-1.12v-8.432h1.04v1.92a3.607 3.607 0 0 1 1.312-1.488 3.428 3.428 0 0 1 1.904-.56v1.168a3.434 3.434 0 0 0-1.6.304 2.65 2.65 0 0 0-1.12.992c-.278.437-.416.965-.416 1.584Zm7.641 4.688c-.747 0-1.403-.187-1.968-.56-.565-.373-1.008-.89-1.328-1.552-.32-.661-.48-1.424-.48-2.288 0-.853.16-1.605.48-2.256.32-.661.763-1.179 1.328-1.552.576-.373 1.232-.56 1.968-.56a3.7 3.7 0 0 1 1.76.416c.523.277.949.672 1.28 1.184.341.512.565 1.12.672 1.824h-1.136c-.128-.768-.421-1.365-.88-1.792-.448-.437-1.013-.656-1.696-.656-.523 0-.987.144-1.392.432-.395.288-.704.683-.928 1.184-.213.501-.32 1.093-.32 1.776s.107 1.285.32 1.808c.224.512.533.912.928 1.2.405.277.869.416 1.392.416.693 0 1.264-.213 1.712-.64.448-.437.736-1.045.864-1.824h1.136c-.096.715-.315 1.328-.656 1.84a3.405 3.405 0 0 1-1.28 1.184c-.523.277-1.115.416-1.776.416Zm1.584 1.712c0 .384-.155.693-.464.928-.309.235-.699.352-1.168.352s-.869-.117-1.2-.352c-.32-.235-.512-.57-.576-1.008H293c.053.245.165.427.336.544.171.128.384.192.64.192.235 0 .421-.07.56-.208a.607.607 0 0 0 .224-.48c0-.235-.069-.421-.208-.56a1.076 1.076 0 0 0-.512-.272 1.838 1.838 0 0 0-.688-.032l.368-1.152h.672l-.256.752c.437.032.795.165 1.072.4.277.235.416.533.416.896Zm7.187-1.728c-.576 0-1.11-.107-1.6-.32a3.74 3.74 0 0 1-1.28-.912 4.422 4.422 0 0 1-.832-1.392 5.163 5.163 0 0 1-.288-1.76c0-.63.096-1.21.288-1.744.202-.533.48-.992.832-1.376a3.74 3.74 0 0 1 1.28-.912 3.967 3.967 0 0 1 1.6-.32c.586 0 1.125.107 1.616.32.49.213.912.517 1.264.912.362.384.64.843.832 1.376.202.533.304 1.115.304 1.744a4.93 4.93 0 0 1-.304 1.76 4.08 4.08 0 0 1-.832 1.392 3.597 3.597 0 0 1-1.264.912c-.491.213-1.03.32-1.616.32Zm0-.96c.554 0 1.045-.139 1.472-.416a2.907 2.907 0 0 0 1.024-1.2c.256-.512.384-1.115.384-1.808 0-.693-.128-1.29-.384-1.792a2.815 2.815 0 0 0-1.024-1.168 2.643 2.643 0 0 0-1.472-.416 2.69 2.69 0 0 0-1.472.416 2.961 2.961 0 0 0-1.024 1.168c-.246.501-.368 1.099-.368 1.792 0 .693.122 1.296.368 1.808.256.512.597.912 1.024 1.2a2.69 2.69 0 0 0 1.472.416Zm6.947.8h-1.12v-8.432h1.04v1.584c.288-.544.667-.97 1.136-1.28a2.92 2.92 0 0 1 1.616-.464c.661 0 1.221.17 1.68.512.469.341.789.821.96 1.44a3.231 3.231 0 0 1 1.152-1.424 3.032 3.032 0 0 1 1.76-.528c.875 0 1.563.277 2.064.832.512.544.768 1.307.768 2.288V93.5h-1.104v-5.104c0-.81-.181-1.43-.544-1.856-.352-.437-.869-.656-1.552-.656a2.06 2.06 0 0 0-1.168.352 2.43 2.43 0 0 0-.848.944c-.203.395-.304.853-.304 1.376V93.5h-1.12v-5.104c0-.81-.176-1.43-.528-1.856-.352-.437-.875-.656-1.568-.656-.427 0-.821.117-1.184.352a2.32 2.32 0 0 0-.832.944c-.203.395-.304.853-.304 1.376V93.5Z" opacity=".9"/></svg>

<p align="left">
  <img width='350' src="https://github.com/igorfurtado/waiterapp-mobile/assets/70289587/e9962dc2-63e0-4626-8c5c-7650a6c671be" alt="Mockup WaiterApp"/>
</p>

## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Primary     | ![#D73035](https://via.placeholder.com/10/d73035?text=+) #D73035 |
| Primary +1     | ![#8A1114](https://via.placeholder.com/10/8A1114?text=+) #8A1114 |
| Primary -1      | ![#FFABAD](https://via.placeholder.com/10/FFABAD?text=+) #FFABAD |
| Dark  +1     | ![#333333](https://via.placeholder.com/10/333333?text=+) #333333 |
| Dark     | ![#666666](https://via.placeholder.com/10/666666?text=+) #666666 |
| Dark    -1 | ![#999999](https://via.placeholder.com/10/999999?text=+) #999999 |
| Disabled | ![#CCCCCC](https://via.placeholder.com/10/cccccc?text=+) #CCCCCC |
| Light +1 | ![#F2F2F2](https://via.placeholder.com/10/F2F2F2?text=+) #F2F2F2 |
| Light | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |

## Fontes utilizadas

General Sans;
## Referência
Esse projeto foi elaborado como parte do curso JStack.

 - [JStack](https://jstack.com.br/)



## Api

Link para o repositório da api deste projeto:

https://github.com/igorfurtado/waiterapp-api

## 🛠 Stack
ReactNative + Expo + Typescript + StyledComponents

