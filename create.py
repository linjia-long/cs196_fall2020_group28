import csv
import sys
csv.field_size_limit(sys.maxsize)
with open('./extract_data.csv', 'w',encoding='utf8') as csvreader:
    writer = csv.writer(csvreader, delimiter=',')
    writer.writerow(["id", "content"])
    with open('./articles1.csv','r',encoding='utf8') as csvwriter:
        reader = csv.DictReader(csvwriter)
        for row in reader:
            writer.writerow([row['id'], row['content']])
    with open('./articles2.csv','r',encoding='utf8') as csvwriter:
        reader = csv.DictReader(csvwriter)
        for row in reader:
	           writer.writerow([row['id'], row['content']])
    with open('./articles3.csv','r',encoding='utf8') as csvwriter:
	       reader = csv.DictReader(csvwriter)
	       for row in reader:
	              writer.writerow([row['id'], row['content']])
