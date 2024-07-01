import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';
import ItemsService, { MLResponse } from '@src/services/ItemsService';
import { formatItem, formatItems } from '@src/util/misc';
import { MLRItem, MLRItemDescription } from '@src/models/types';

async function getItems(_: IReq, res: IRes) {
    const query = _.query.q + '';
    const { error, data } = await ItemsService.getItems(query);
    if (error !== null) {
        return res.status(error.status).json(error.message);
    }
    if (data.length === 0) {
        return res.status(HttpStatusCodes.OK).json(formatItems([], []));
    }
    const firstItemCategory = data[0].category_id;
    const { data: categories, error: categoriesError } = await ItemsService.getItemCategory(firstItemCategory);
    if (categoriesError !== null) {
        return res.status(categoriesError.status).json(categoriesError.message);
    }
    return res.status(HttpStatusCodes.OK).json(formatItems(data, categories));
}

async function getItem(_: IReq, res: IRes) {
    const id = _.params.id;
    const [
        { data: result, error },
        { data: resultDescription, error: errorDescription }
    ] = (await ItemsService.getItem(id)) as [MLResponse<MLRItem>, MLResponse<MLRItemDescription>];
    if (error !== null || errorDescription !== null) {
        return res.status(error?.status || errorDescription?.status as number)
            .json(error?.message || errorDescription?.message as string);
    }
    const { data: path_from_root, error: categorieError } = await ItemsService.getItemCategory(result.category_id);
    if (categorieError !== null) {
        return res.status(categorieError.status).json(categorieError.message);
    }
    return res.status(HttpStatusCodes.OK).json(formatItem(result, resultDescription, path_from_root));
}


// **** Export default **** //

export default {
    getItems,
    getItem,
} as const;
