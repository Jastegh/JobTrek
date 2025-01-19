# Generated by Django 5.1.5 on 2025-01-18 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobAppOrganizer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='is_master',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='resume',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='resume',
            name='template_file',
            field=models.TextField(),
        ),
    ]
