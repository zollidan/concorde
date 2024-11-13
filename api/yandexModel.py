from yandex_cloud_ml_sdk import YCloudML

sdk = YCloudML(folder_id="", auth="")

model = sdk.models.completions('yandexgpt')
model = model.configure(temperature=0.5)
result = model.run("Что такое небо?")

for alternative in result:
    print(alternative)
