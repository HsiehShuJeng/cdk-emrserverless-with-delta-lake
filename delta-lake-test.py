from pyspark.sql import SparkSession
import uuid

if __name__ == "__main__":
    """
        Usage: wordcount [destination path]
    """

    # .config("spark.sql.extensions", "io.delta.sql.DeltaSparkSessionExtension") \
    # .config("spark.sql.catalog.spark_catalog", "org.apache.spark.sql.delta.catalog.DeltaCatalog") \
    # .enableHiveSupport() \
    spark = SparkSession \
        .builder \
        .appName("Delta-Lake-OSS") \
        .getOrCreate()

    url = "s3://doc-example-bucket-630778274080/delta-lake/output/1.2.1/%s/" % str(
        uuid.uuid4())

    # creates a Delta table and outputs to target S3 bucket
    spark.range(5).write.format("delta").save(url)

    # reads a Delta table and outputs to target S3 bucket
    spark.read.format("delta").load(url).show()
    spark.stop()
