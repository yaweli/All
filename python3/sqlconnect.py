#
# connect sql
#
import psycopg2 # if no working pip install psycopg2
# create connection
conn = psycopg2.connect(host="localhost", port = 5432, database="suppliers", user="postgres", password="postgres")

# Create a cursor object
cur = conn.cursor()

# A sample query of all data from the "vendors" table in the "suppliers" database
cur.execute("""SELECT * FROM vendors""")
query_results = cur.fetchall()
print(query_results)

# Close the cursor and connection to so the server can allocate
# bandwidth to other requests
cur.close()
conn.close()