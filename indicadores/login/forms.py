# coding: utf-8
from django import forms
from indicadores.login.models import Login
from django.utils.translation import ugettext as _


class LoginForm(forms.ModelForm):

    class Meta:
        model = Login
