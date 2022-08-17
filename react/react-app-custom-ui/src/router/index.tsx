import {RouteObject} from "react-router-dom";
import { Typography } from 'antd';
const { Text } = Typography;

const router: RouteObject[] = [
    {path: '/', element: <Text type="success">Home Page</Text>}
]

export default router
