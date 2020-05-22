from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin, User
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _

class UserManager(BaseUserManager):
    
    def create_user(self, email, nickname, password=None):
        if not email:
            raise ValueError(_('Users must have an email address'))

        user = self.model(email=self.normalize_email(email), nickname=nickname)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, nickname, password):
        user = self.create_user(email=email, password=password, nickname=nickname)
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name=_('Email address'), max_length=255, unique=True)
    nickname = models.CharField(verbose_name=_('Nickname'), default='名無し', max_length=30, unique=True)
    is_active = models.BooleanField(verbose_name=_('Is active'), default=True)
    data_joined = models.DateTimeField(verbose_name=_('Date joined'), default=timezone.now)
    salt = models.CharField(verbose_name=_('Salt'), max_length=10, blank=True)
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nickname',]
    
    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')
        ordering = ('-date_joined',)

        def __str__(self):
            return self.nickname
        
        # def get_full_name(self):
        #     return self.nickname
        
        # def get_short_name(self):
        #     return self.nickname
        
        # @property
        # def is_staff(self):
        #     return self.is_staff
        
        # get_full_name.short_description = _('Full name')
