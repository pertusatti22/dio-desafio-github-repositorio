import { Pool } from 'pg';

const connectionString = 'postgres://crtptrwa:JT8a_mnjjVLSPLjnS3-QpGWVv_550vV3@kesavan.db.elephantsql.com/crtptrwa';

const db = new Pool({ connectionString });  

export default db;