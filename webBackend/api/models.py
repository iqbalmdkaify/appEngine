from django.db import models

# Create your models here.


class Task(models.Model):
    COMPLETED = "CL"
    PENDING = "PD"
    IN_PROGRESS = "PR"

    STATUS_CHOICES = [
        (COMPLETED, "Completed"),
        (PENDING, "Pending"),
        (IN_PROGRESS, "In progress"),
    ]

    id = models.BigAutoField(primary_key=True)
    task_title = models.CharField(max_length=30)
    task_status = models.CharField(
        max_length=2, choices=STATUS_CHOICES, default=PENDING
    )
    task_description = models.TextField(max_length=150)

    def __str__(self):
        return self.task_title
