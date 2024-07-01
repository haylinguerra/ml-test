import { Router } from 'express';
import jetValidator from 'jet-validator';
import Paths from '../common/Paths';
import ItemsRoutes from './ItemsRoutes';

const apiRouter = Router();
const validate = jetValidator();

const itemsRouter = Router();

itemsRouter.get(
  '',
  validate(['q', 'string', 'query']),
  ItemsRoutes.getItems
)

itemsRouter.get(
  Paths.Items.Get,
  validate(['id', 'string', 'params']),
  ItemsRoutes.getItem
)

apiRouter.use(Paths.Items.Base, itemsRouter);

export default apiRouter;
