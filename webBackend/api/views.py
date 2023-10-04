from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
import json


# Create your views here.
@api_view(["GET"])
@login_required()
def homePageRoute(request):
    json_message = {"message": "You viewing in homepage"}

    return Response(json_message, status=status.HTTP_200_OK)


@api_view(["POST"])
def register_user(request):
    data = json.loads(request.body.decode("utf-8"))
    # print(data["username"])
    user = User.objects.create_user(data["username"], data["email"], data["password"])

    user.save()

    user_data = {"info": data}

    return Response(user_data, status=status.HTTP_201_CREATED)


@api_view(["POST"])
def login_user(request):
    user_data = json.loads(request.body.decode("utf-8"))

    user = authenticate(username=user_data["username"], password=user_data["password"])

    if user:
        login(request, user)

        return Response(
            {"message": "succesfull login"}, status=status.HTTP_202_ACCEPTED
        )
    return Response(
        {"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
    )


@api_view(["GET"])
def logout_user(request):

    logout(request)

    return Response({"message": "logout successful"}, status=status.HTTP_200_OK)


@api_view(["GET"])
@login_required()
def list_tasks(request):
    task_list = Task.objects.all()
    serializer = TaskSerializer(task_list, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
def create_task(request):
    serializer = TaskSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        in_valid_message = {"error_message": "invalid data"}
        return Response(in_valid_message, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def get_task_detail(request, pk):
    tasks = Task.objects.get(id=pk)
    serializer = TaskSerializer(tasks, many=False)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
def update_task(request, pk):
    tasks = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=tasks, data=request.data, many=False)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        in_valid_message = {"error_message": "invalid data"}
        return Response(in_valid_message, status=status.HTTP_400_BAD_REQUEST)
