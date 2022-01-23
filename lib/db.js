import mysql from "serverless-mysql"
export const db = mysql({
  config: {
    host: "remotemysql.com",
    database: "QoGOU3i7pF",
    user: "QoGOU3i7pF",
    password: "zUNQfCUClz"
  }
})
export async function sql_query(query_string, value = []) {
  try {
    const results = await db.query(query_string, value)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}