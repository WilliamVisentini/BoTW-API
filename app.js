import express from 'express';

import foodRoutes from './src/routes/foodRouter.js' 
import weaponsRoutes from './src/routes/weaponRoutes.js';
import monsterRoutes from './src/routes/monsterRoutes.js';
import creatureRoutes from './src/routes/creatureRoute.js'
import shrineRoutes from './src/routes/shrineRouter.js';
import treasureRoutes from './src/routes/treasureRoutes.js';
import master_monsterRoutes from './src/routes/masterModeRoute.js'

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
    app.use('/api', weaponsRoutes, monsterRoutes, creatureRoutes, foodRoutes, shrineRoutes, treasureRoutes, master_monsterRoutes);

    app.get(`/`, (req, res) => {
      res.send("Welcome to BoTW API!");
    })

    const PORT = process.env.PORT || 9990;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error initializing the app:', error);
  }
})();
