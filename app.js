import express from 'express';
import weaponsRoutes from './src/routes/weaponRoutes.js';
import monsterRoutes from './src/routes/monsterRoutes.js';
import creatureRoutes from './src/routes/creatureRoute.js'
import connect_db from './src/config/db_connect.js';

(async () => {  // Wrap everything in an async function
  try {
    const connect = await connect_db();

    connect.on("error", (err) => {
      console.error("Erro de Conexão", err);
    });

    connect.once("open", () => {
      console.log("Conexão executada com sucesso!");
    });

    const app = express();

    app.use(express.json());

    // Register routes
    app.use('/api', weaponsRoutes, monsterRoutes, creatureRoutes);

    const PORT = process.env.PORT || 9990;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error initializing the app:', error);
  }
})();
