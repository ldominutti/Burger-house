# Generated by Django 5.0.1 on 2024-01-28 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=50)),
                ('phone_number', models.CharField(max_length=20)),
                ('products', models.CharField(max_length=500)),
            ],
        ),
    ]
