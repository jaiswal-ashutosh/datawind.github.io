# Generated by Django 4.1.6 on 2023-02-12 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0002_post_delete_contact"),
    ]

    operations = [
        migrations.AddField(
            model_name="post",
            name="slug",
            field=models.CharField(default="", max_length=130),
            preserve_default=False,
        ),
    ]
