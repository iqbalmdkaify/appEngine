# Generated by Django 4.2.4 on 2023-08-04 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Task",
            fields=[
                ("id", models.BigAutoField(primary_key=True, serialize=False)),
                ("task_title", models.CharField(max_length=30)),
                (
                    "task_status",
                    models.CharField(
                        choices=[
                            ("CL", "Completed"),
                            ("PD", "Pending"),
                            ("PR", "In progress"),
                        ],
                        max_length=2,
                    ),
                ),
                ("task_desccription", models.TextField(max_length=150)),
            ],
        ),
    ]
